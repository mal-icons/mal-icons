import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-watchman-monitoring",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabWatchmanMonitoring {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,16C123.45,16,16,123.45,16,256S123.45,496,256,496,496,388.55,496,256,388.55,16,256,16ZM121.69,429.12C70.06,388.97,36.74,326.32,36.74,256a218.52,218.52,0,0,1,9.59-64.12l102.9-17.89-0.12,10.97-13.94,2.01s-0.14,12.5-0.14,19.55a12.78,12.78,0,0,0,4.89,10.35l9.47,7.4Zm105.69-283.27,8.48-7.62s6.93-5.38-0.14-9.34c-7.19-4.02-39.53-34.5-39.53-34.5-5.35-5.48-8.26-7.35-15.46,0,0,0-32.34,30.47-39.53,34.5-7.08,3.96-0.14,9.34-0.14,9.34l8.48,7.62-0.05,4.37L75.98,131.04c39.64-56.94,105.53-94.3,180.02-94.3A218.75,218.75,0,0,1,420.93,111.77l-193.51,37.7Zm34.06,329.27-33.9-250.86,9.47-7.4a12.78,12.78,0,0,0,4.89-10.35c0-7.04-0.14-19.55-0.14-19.55l-13.94-2.01-0.12-10.47,241.71,31.39A218.87,218.87,0,0,1,475.26,256C475.26,375.07,379.83,472.21,261.45,475.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabWatchmanMonitoring;
