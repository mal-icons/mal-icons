import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-sports-mma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSportsMma {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M310-120q-12.75 0-21.37-8.62T280-150v-105h400v105q0 12.75-8.62 21.38T650-120H310Zm-46-204q-11 0-19-6.5T235-348l-34-161q-1-2-1-9v-262q0-26 17-43t43-17h370q26 0 43 17t17 43v135q0-16 9.5-25.5T725-680q16 0 25.5 9.5T760-645v127q0 7-1 9l-34 161q-2 11-10.25 17.5T696-324H264Zm24.57-60H671l29-147v-37h-70v-212H260v249l28.57 147ZM365-568h160q12.75 0 21.38-8.62T555-598v-74q0-12.75-8.62-21.37T525-702H365q-12.75 0-21.37 8.63T335-672v74q0 12.75 8.63 21.38T365-568Zm115-14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSportsMma;
