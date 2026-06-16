import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-coffee-maker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCoffeeMaker {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-80q-23 0-41.5-18T160-140v-680q0-23 18.5-41.5T220-880h550q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T770-820h-77v60q0 14-12.5 27T654-720H368q-14 0-26.5-13T329-760v-60H220v680h188q-38-26-58.5-63T329-293v-133q0-24.75 17.63-42.37T389-486h244q24.75 0 42.38 17.63T693-426v133q0 53-21 90t-59 63h157q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q800-97 791.38-88.5T770-80H220Zm290.5-86q51.5 0 87-37.04Q633-240.08 633-293v-133H389v133q0 52.92 35 89.96Q459-166 510.5-166Zm-0.5-394q16.58 0 27.79-11.21Q549-582.42 549-599t-11.21-27.79Q526.58-638 510-638t-27.79 11.21Q471-615.58 471-599t11.21 27.79Q493.43-560 510-560Zm1 134Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCoffeeMaker;
