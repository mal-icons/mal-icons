import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-departure-board",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDepartureBoard {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M788-646q5 5 12.5 5t12.5-5q5-5 5-12.5t-5-12.5l-64-63v-105q0-8-4.5-12.5T732-856q-8 0-13 5t-5 13v106.86Q714-729 718-721l70 75ZM246.06-272Q269-272 285-288.06q16-16.06 16-39T284.94-366q-16.06-16-39-16T207-365.94q-16 16.06-16 39T207.06-288q16.06 16 39 16Zm308 0Q577-272 593-288.06q16-16.06 16-39T592.94-366q-16.06-16-39-16T515-365.94q-16 16.06-16 39T515.06-288q16.06 16 39 16ZM178.94-80Q161-80 148.5-92.54 136-105.08 136-123v-68q-29-17-42.5-47T80-301v-397q0-42 24.5-71.5t76-46.5q51.5-17 132-21.5T504-836q-6 15-11 29.5t-8 30.5q-151-10-239 4.5T140-724h341q0 15 2.25 30t6.75 30H140v173h521q10 4 27.5 7t31.5 3v180q0 33-13.5 63T664-191v68q0 17.92-12.56 30.46Q638.88-80 620.94-80 603-80 590.5-92.54 578-105.08 578-123v-39H222v39q0 17.92-12.56 30.46Q196.88-80 178.94-80ZM578-431H140h520-82Zm152.81-109q-79.19 0-135-55.81Q540-651.62 540-730.81 540-810 595.87-865 651.74-920 731-920q78.44 0 133.72 55.4 55.28 55.4 55.28 134Q920-652 865-596t-134.19 56ZM222-222h356q35 0 58.5-27t23.5-62v-120H140v120q0 35 23.5 62t58.5 27Zm259-502H140h341Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDepartureBoard;
