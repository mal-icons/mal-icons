import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-sheets-rtl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSheetsRtl {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M205-440q-18.75 0-31.87-13.12T160-485v-390q0-18.75 13.13-31.87T205-920h550q18.75 0 31.88 13.13T800-875v390q0 18.75-13.12 31.88T755-440H205Zm15-270h230v-150H220v150Zm290 0h230v-150H510v150Zm-60 210v-150H220v150h230Zm60 0h230v-150H510v150ZM270-80 124-226l146-146 42 42-73 74h561v60H239l73 74-42 42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSheetsRtl;
