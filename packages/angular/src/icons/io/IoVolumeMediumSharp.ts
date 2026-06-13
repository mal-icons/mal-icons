import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-volume-medium-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoVolumeMediumSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polygon",{"points":"157.65 176.1 64 176.1 64 335.9 157.65 335.9 288 440 288 72 157.65 176.1"}],["path",{"d":"M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M400,368c19.48-34,32-64,32-112s-12-77.7-32-112","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoVolumeMediumSharp;
