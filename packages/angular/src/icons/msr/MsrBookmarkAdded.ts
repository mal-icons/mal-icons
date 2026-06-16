import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-bookmark-added",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBookmarkAdded {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-240-196 84q-30 13-57-4.76-27-17.75-27-50.24v-574q0-24 18-42t42-18h290v60H260v574l220-93 220 93v-334h60v334q0 32.49-27 50.24Q706-143 676-156l-196-84Zm0-545H260h290-70Zm236 95 127-127q8.8-9 20.9-9 12.1 0 21.1 9.05 9 9.05 9 21.5Q894-783 885-774L737-626q-9 9-21 9t-21-9l-64-64q-9-9-9-21.16 0-12.16 8.61-21Q640-741 652.47-741q12.47 0 21.53 9l42 42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBookmarkAdded;
