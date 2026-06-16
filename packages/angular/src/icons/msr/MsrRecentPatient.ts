import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-recent-patient",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRecentPatient {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M590-160H220q-24.75 0-42.37-17.62T160-220v-34q0-38 19-65t49-41q67-30 128.5-45T480-420q27.5 0 55 3t55 9v59q-28-6-55-8.5t-55-2.5q-57 0-110.5 12T252-306q-14 7-23 21.5t-9 30.5v34h370v60Zm-370-60h370-370Zm260-261q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm0-60q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm250 421h-50q-12.75 0-21.37-8.62T650-240v-160q0-12.75 8.63-21.37T680-430h147q12.63 0 19.31 11Q853-408 848-397l-64 127h40q13.5 0 20.25 11.5T844-236L744-62q-3 5-8.5 3.5T730-66v-144Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRecentPatient;
