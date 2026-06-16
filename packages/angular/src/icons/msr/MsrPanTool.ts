import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-pan-tool",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPanTool {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M402-40q-27 0-51.5-12.5T311-88L68-446q-6-9-4-20t10-18q17-15 39.5-19t44.57 13.19L280-397v-413q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T340-810v468q0 19-16.5 27t-31.5-3l-126-92 195 288q7 11 17.5 16.5T402-100h288q38 0 64-26t26-64v-580q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T840-770v580q0 63-43.5 106.5T690-40H402Zm75.18-880q12.83 0 21.33 8.63T507-890v380q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T447-510v-380q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62Zm167 40q12.83 0 21.33 8.63T674-850v340q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T614-510v-340q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62ZM473-290Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPanTool;
