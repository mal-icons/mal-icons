import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-digital-ocean-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDigitalOceanIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-digital-ocean-icon-1-a)"}],["path",{"fill":"currentColor","d":"M300 484.1V600a301 301 0 0 0 285.1-395.6A290 290 0 0 0 395.6 14.9 301 301 0 0 0 0 300h116.2c0-123.3 122-218.6 251.6-171.6a174 174 0 0 1 103.8 103.7 184.7 184.7 0 0 1-171.3 251.7V368.3h-116v115.8zm-115.6 89h-89v-89h89zm-89-89H21v-74.6h74.5z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDigitalOceanIcon;
