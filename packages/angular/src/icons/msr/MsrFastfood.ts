import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-fastfood",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFastfood {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M71-304q-13.26 0-21.63-9T43-334q11-86 83-144.5T345-537q147 0 219 58.5T647-334q2 12-6.37 21T619-304H71ZM709-40v-60h86l57-580H454l-3.33-27.08Q449-721 457.98-730.5 466.95-740 481-740h171v-150q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T712-890v150h176q13.5 0 22.75 9.75T918-707l-64 607q-3 26-21.5 43T786-40h-77Zm0-60h86-86ZM575-364q-18-51-74-82t-157-31q-101 0-157 31t-75 82h463Zm-231 0ZM70-176q-12.75 0-21.37-8.68Q40-193.35 40-206.17 40-219 48.63-227.5T70-236h548q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T618-176H70Zm0 136q-12.75 0-21.37-8.68Q40-57.35 40-70.17 40-83 48.63-91.5T70-100h548q12.75 0 21.38 8.68Q648-82.65 648-69.82 648-57 639.38-48.5T618-40H70Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFastfood;
