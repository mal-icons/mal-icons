import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-print-connect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPrintConnect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-588h680-680Zm102 468v-176H80v-246q0-45.05 30.5-75.53Q141-648 186-648h588q45.05 0 75.53 30.48Q880-587.05 880-542v87q-14-9-28.5-15.5T820-482v-60q0-19.55-13.22-32.77Q793.55-588 774-588H186q-19.55 0-32.77 13.23Q140-561.55 140-542v186h102v-76h376q-14.09 12.83-25.55 27.91Q581-389 572-372H302v192h267q8 17 18.5 32t24.5 28H242Zm476-47-100-99 43-42 57 56 141-141 43 42-184 184Zm-60-481v-132H302v132h-60v-192h476v192h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPrintConnect;
