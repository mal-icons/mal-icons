import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-contract-edit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrContractEdit {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M225-80q-43.75 0-74.37-30.62T120-185v-75q0-24.75 17.63-42.37T180-320h60v-500q0-24.75 17.63-42.37T300-880h480q24.75 0 42.38 17.63T840-820v326q-16 0-31 6t-29 17v-349H300v500h328l-60 60H180v75q0 19.13 13 32.06Q206-140 224-140h296v60H225Zm395-40h51l164-164 28 28L696-89q-5 5-10.22 7-5.22 2-10.78 2h-65q-12.75 0-21.37-8.62T580-110v-65q0-5.56 2-10.78Q584-191 589-196l167-167 28 28-164 164v51Zm243-136L756-363l61-61q9-9 21-9t21 9l65 65q9 9 9 21t-9 21l-61 61ZM390-640q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T390-700h300q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T690-640H390Zm0 120q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T390-580h300q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T690-520H390Zm130 380H180h340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrContractEdit;
