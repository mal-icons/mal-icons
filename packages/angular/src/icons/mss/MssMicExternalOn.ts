import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-mic-external-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMicExternalOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M184-692q-14-15-19-34t-5-39q0-48 33-81.5t81-33.5q48 0 81 33.5t33 81.5q0 20-5 39t-19 34H184Zm57 612v-155h-34l-40-416h214l-40 416h-40v95h189v-740h310v800h-60v-740H550v740H241Zm20-215h26l28-296h-82l28 296Zm26-296h-54 82-28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMicExternalOn;
