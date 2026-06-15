import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-photo-reel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcPhotoReel {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#673AB7","d":"M10,9c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V13c0-2.2-1.8-4-4-4"}],["rect",{"fill":"#311B92","x":"14","y":"13","width":"2","height":"26"}],["path",{"fill":"#311B92","d":"M24,9V7c0-1.2-0.8-2-2-2h-8c-1.2,0-2,0.8-2,2v2H24z"}],["path",{"fill":"#D84315","d":"M30,13H16v26h14V13z M21,37h-3v-4h3V37z M21,19h-3v-4h3V19z M27,37h-3v-4h3V37z M24,19v-4h3v4H24z"}],["path",{"fill":"#FF5722","d":"M30,13v2h3v4h-3v14h3v4h-3v2h12V13H30z M39,37h-3v-4h3V37z M39,19h-3v-4h3V19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcPhotoReel;
