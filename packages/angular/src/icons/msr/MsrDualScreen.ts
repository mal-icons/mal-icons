import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-dual-screen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDualScreen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m220-242 280 112v-588L220-830v588Zm-22 55q-17-7-27.5-21.5T160-242v-578q0-24.75 17.63-42.37T220-880l300 106q18 6 29 21.53 11 15.53 11 34.47v588q0 32.01-26.5 49.51Q507-63 478-75L198-187Zm302-13v-60h240v-560H220v-60h520q24.75 0 42.38 17.63T800-820v560q0 24.75-17.62 42.38T740-200H500Zm-280-42v-588 588Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDualScreen;
