import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-camera-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCameraSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"272","r":"64"}],["path",{"d":"M456,144H373c-3,0-6.72-1.94-9.62-5l-27.28-42.8C325,80,320,80,302,80H210c-18,0-24,0-34.07,16.21L148.62,139c-2.22,2.42-5.34,5-8.62,5V128a8,8,0,0,0-8-8H92a8,8,0,0,0-8,8v16H56a24,24,0,0,0-24,24V408a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V168A24,24,0,0,0,456,144ZM260.51,367.9a96,96,0,1,1,91.39-91.39A96.11,96.11,0,0,1,260.51,367.9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCameraSharp;
