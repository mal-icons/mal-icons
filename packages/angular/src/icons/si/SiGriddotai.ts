import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-griddotai",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGriddotai {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.73 9.09v-3.52H6.51v12.82h5.61v-5.61h11.23V24h-5.61v-5.61H12.12V24h-4.5a6.97 6.97 0 0 1-6.96-6.96V6.97A6.97 6.97 0 0 1 7.62 0h8.76a6.97 6.97 0 0 1 6.96 6.96v2.13h-5.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGriddotai;
