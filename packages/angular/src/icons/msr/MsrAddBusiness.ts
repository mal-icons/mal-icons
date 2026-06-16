import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-add-business",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAddBusiness {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M786-161v91q0 12.75-8.68 21.38Q768.65-40 755.83-40 743-40 734.5-48.62T726-70v-91h-90q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T636-221h90v-90q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T786-311v90h90q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T876-161h-90Zm-652 0q-12.75 0-21.37-8.62T104-191v-227H78q-14.14 0-23.07-11T49-454l44-202q2-11 10.25-17.5T122-680h554q10.5 0 18.75 6.5T705-656l44 202q3 14-5.93 25T720-418h-24v137q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T636-281v-137H420v227q0 12.75-8.62 21.38T390-161H134Zm30-60h196v-197H164v197Zm-50-257h572-572Zm14-262q-12.75 0-21.37-8.68Q98-757.35 98-770.17 98-783 106.63-791.5T128-800h543q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T671-740H128Zm-14 262h572l-31-142H145l-31 142Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAddBusiness;
