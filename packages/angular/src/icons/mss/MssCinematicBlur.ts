import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-cinematic-blur",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCinematicBlur {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m140-840 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h172v720H80v-720h60Zm0 212v448h680v-448H140Zm0 0v448-448Zm180 388h320v-32q0-42-42.5-65T480-360q-75 0-117.5 23T320-272v32Zm160-180q31 0 52.5-21.5T554-494q0-31-21.5-52.5T480-568q-31 0-52.5 21.5T406-494q0 31 21.5 52.5T480-420Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCinematicBlur;
