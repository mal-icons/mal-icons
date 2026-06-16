import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-chat-apps-script",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrChatAppsScript {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M586-160q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T586-220h145l-118-83q-10-7-12.5-19t4.5-22q7-10 18.83-12.5T646-352l119 82-50-136q-5-11 1-22t18-16q12-5 23 0.5t16 17.5l48 136 39-139q3-12 13-18t22-3q12 3 18.5 13t3.5 22l-68.15 255H586ZM240-280l-94 94q-7 7-16.5 3.46Q120-186.08 120-196v-584q0-24.75 17.63-42.37T180-840h520q24.75 0 42.38 17.63T760-780v223q-10-2-20-2.5t-20-0.5q-5 0-10 0.17-5 0.17-10 0.83v-221H180v440h301q-0.67 5-0.83 10-0.17 5-0.17 10 0 10 0.5 20t2.5 20H240Zm70-340h260q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T570-680H310q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T310-620Zm0 170h140q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T450-510H310q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T310-450ZM180-340v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrChatAppsScript;
