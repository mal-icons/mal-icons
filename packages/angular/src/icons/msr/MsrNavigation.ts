import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-navigation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNavigation {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-252 207-128q-9.75 5-18.37 2.5T174-133.89q-6-5.89-8.5-14.72-2.5-8.83 2.5-18.4l285-650q3.65-9 11.3-13.5t15.68-4.5q8.02 0 15.69 4.5T507-817l285 650q5 9.57 2.5 18.4t-8.5 14.72q-6 5.89-14.62 8.39Q762.75-123 753-128L480-252Zm-222 34 222-98 222 98-222-514-222 514Zm222-98Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNavigation;
