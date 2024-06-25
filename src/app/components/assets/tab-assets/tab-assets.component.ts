import { Component,inject } from '@angular/core';
import { AssetlistComponent } from '../assetlist/assetlist.component';
import { AssetService } from '../../../services/asset/asset.service';

@Component({
  selector: 'app-tab-assets',
  standalone: true,
  imports: [
    AssetlistComponent
  ],
  templateUrl: './tab-assets.component.html',
  styleUrl: './tab-assets.component.scss'
})
export class TabAssetsComponent {
  private assetService = inject(AssetService)

  newAsset(){
    this.assetService.newAsset();
  }
}
