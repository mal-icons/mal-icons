import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-wifi-protected-setup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWifiProtectedSetup {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M649-266q6-21 9.5-43.5T662-355q0-80-35-146.5T532-612l-66 66q-7 7-16.5 3.5T440-556v-269q0-6 4.5-10.5T455-840h269q10 0 13.5 9.5T734-814l-66 66q52 47 83 112t31 141q0 72-27.5 134T679-252q-12 11-23.5 6.5T649-266ZM236-120q-10 0-13.5-9.5T226-146l66-66q-53-47-83.5-112T178-465q0-72 27.5-134T281-708q12-12 24-7.5t7 21.5q-6 22-10 44t-4 45q0 80 35.5 146.5T428-348l66-66q7-7 16.5-3.5T520-404v269q0 6-4.5 10.5T505-120H236Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWifiProtectedSetup;
