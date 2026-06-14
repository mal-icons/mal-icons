import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-news",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcNews {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#FF5722","d":"M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z"}],["path",{"fill":"#FFCCBC","d":"M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"}],["rect",{"fill":"#FF5722","x":"20","y":"10","width":"18","height":"4"}],["rect",{"fill":"#FF5722","x":"20","y":"17","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"30","y":"17","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"20","y":"21","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"30","y":"21","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"20","y":"25","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"30","y":"25","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"20","y":"29","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"30","y":"29","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"20","y":"33","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"30","y":"33","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"20","y":"37","width":"8","height":"2"}],["rect",{"fill":"#FF5722","x":"30","y":"37","width":"8","height":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcNews;
