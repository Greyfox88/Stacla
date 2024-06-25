import { Component, OnInit, inject, Input } from '@angular/core';
import { AssetComponent } from '../asset/asset.component';
import { Asset } from '../../../services/database/database.service';
import { AssetService } from '../../../services/asset/asset.service';

@Component({
  selector: 'app-assetlist',
  standalone: true,
  imports: [
    AssetComponent
  ],
  templateUrl: './assetlist.component.html',
  styleUrl: './assetlist.component.scss'
})
export class AssetlistComponent {
  private assetService = inject(AssetService);
  public campaignId: number = 0;
  @Input() FocusedCharList: boolean = false;
  @Input() FleetAssetList: boolean = false;
  @Input() SceneAssetList: boolean = false;
  focusedAssetId?: number|undefined;
  assetList?: Asset[] | undefined[];

  ngOnInit(): void {
    this.assetService.refreshAssets();
    this.assetService.assetSubject.subscribe(x => {
      this.assetList = x;
    });
  }

  focusAsset(assetId:number|undefined) {
    if(this.focusedAssetId === assetId)
      this.focusedAssetId = undefined;
    else
      this.focusedAssetId = assetId;
  }

  refreshAssets() {
    this.assetService.refreshAssets();    
  }
}
