import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-air-traffic-control",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhAirTrafficControl {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M229.11,62.82A16,16,0,0,0,216,56H136V24h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56H40A16,16,0,0,0,25,77.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V160h32v64a8,8,0,0,0,16,0V160h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,62.82ZM110.68,144,97.58,72h60.84l-13.1,72ZM40,72H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhAirTrafficControl;
