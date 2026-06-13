import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-inbox-out",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiInboxOut {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Inbox Out"}],["path",{"d":"M20.49,19.94H3.51a1.45,1.45,0,0,1-1.45-1.45V12.86a1.45,1.45,0,0,1,1.45-1.45h4.1a1.44,1.44,0,0,1,1.30.8l1.37,2.73a0.450.45,0,0,0,0.40.25h2.63a0.450.45,0,0,0,0.4-0.25L15.09,12.2a1.44,1.44,0,0,1,1.3-0.8h4.1a1.45,1.45,0,0,1,1.45,1.45v5.64A1.45,1.45,0,0,1,20.49,19.94ZM3.51,12.41a0.450.45,0,0,0-0.450.45v5.64a0.450.45,0,0,0,0.450.45H20.49a0.450.45,0,0,0,0.45-0.45V12.86a0.450.45,0,0,0-0.45-0.45h-4.1a0.450.45,0,0,0-0.40.25L14.61,15.38a1.45,1.45,0,0,1-1.290.8H10.69a1.44,1.44,0,0,1-1.29-0.8L8.02,12.65a0.450.45,0,0,0-0.4-0.25Z"}],["path",{"d":"M12.5,5.75v4.83a0.50.5,0,0,1-1,0V5.76l-1.27,1.27a0.520.52,0,0,1-0.71,0,0.510.51,0,0,1,0-0.71l2.13-2.12a0.490.49,0,0,1,0.7,0l2.12,2.12a0.50.5,0,0,1,0,0.710.510.51,0,0,1-0.7,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiInboxOut;
