import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-no-food",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNoFood {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M812-63 47-827q-9-9-8.5-21t9.55-21q9.05-9 21.5-9Q82-878 91-869l764 764q9 9 9 21t-9.05 21q-9.05 9-21.5 9Q821-54 812-63Zm50-121-54-54 43-442H453l-3.33-27.08Q448-721 456.98-730.5 465.95-740 480-740h171v-150q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T711-890v150h176q13.5 0 22.75 9.75T917-707l-55 523ZM636-409ZM70-176q-12.75 0-21.37-8.68Q40-193.35 40-206.17 40-219 48.63-227.5T70-236h548q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T618-176H70Zm0 136q-12.75 0-21.37-8.68Q40-57.35 40-70.17 40-83 48.63-91.5T70-100h548q12.75 0 21.38 8.68Q648-82.65 648-69.82 648-57 639.38-48.5T618-40H70Zm360-490v60q-20-4-41.5-5.5T344-477q-101 0-157 31t-75 82h484l60 60H70q-13.26 0-21.63-9T42-334q11-86 83-144.5T344-537q23 0 44.5 2t41.5 5Zm-86 166Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNoFood;
