import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-jet-pack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiJetPack2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16C178.86 16 76 192.87 76 268.66c0 25.26 103.13 25.22 180 25.31 76.870.09 180-0.05 180-25.31C436 192.87 333.14 16 256 16zm-90 303.28c-29.77 0-59.31 4.89-63.28 15C94.78 354.49 150.12 496 166 496c15.88 0 71.22-141.51 63.28-161.72-3.97-10.1-33.51-15-63.28-15zm180 0c-29.77 0-59.31 4.89-63.28 15C274.78 354.49 330.12 496 346 496c15.88 0 71.22-141.51 63.28-161.72-3.97-10.1-33.51-15-63.28-15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiJetPack2;
