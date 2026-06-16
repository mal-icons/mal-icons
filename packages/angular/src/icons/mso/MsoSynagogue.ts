import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-synagogue",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSynagogue {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-120v-560q0-45.83 32.12-77.92 32.12-32.08 78-32.08Q196-790 228-757.92q32 32.08 32 77.92v31l220-191 220 191v-31q0-45.83 32.12-77.92 32.12-32.08 78-32.08Q856-790 888-757.92q32 32.08 32 77.92v560H530v-200q0-21.25-14.32-35.62Q501.35-370 480.18-370 459-370 444.5-355.62 430-341.25 430-320v200H40Zm720-510h100v-49.82Q860-701 845.68-715.5q-14.32-14.5-35.5-14.5Q789-730 774.5-715.62 760-701.25 760-680v50Zm-660 0h100v-49.82Q200-701 185.68-715.5q-14.32-14.5-35.5-14.5Q129-730 114.5-715.62 100-701.25 100-680v50Zm0 450h100v-390H100v390Zm160 0h110v-140q0-45.83 32.12-77.92 32.12-32.08 78-32.08Q526-430 558-397.92q32 32.08 32 77.92v140h110v-390L480-761 260-570v390Zm500 0h100v-390H760v390ZM479.94-505Q457-505 441-521.06q-16-16.06-16-39T441.06-599q16.06-16 39-16T519-598.94q16 16.06 16 39T518.94-521q-16.06 16-39 16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSynagogue;
