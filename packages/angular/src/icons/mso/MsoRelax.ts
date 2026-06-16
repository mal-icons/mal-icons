import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-relax",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRelax {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-120q-18 0-34.5-6.5T416-146L148-415l-7.5-7.5Q137-426 134-430h84l241 241q5 5 9.8 7 4.8 2 11.2 2 6.4 0 11.2-2 4.8-2 9.8-7l267-268q26-26 39-60.5t13-72.5q0-77-49.95-133.5T645.19-780Q610-780 577.5-765.5 545-751 521-725l-27 29q-3 3-6 5t-8 2q-5 0-8.64-1.88-3.64-1.88-6.36-5.11l-27-29q-24.27-25.82-56.64-40.41Q349-780 314-780q-70 0-118 50t-55 120H81q8-95 73-162.5T314-840q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm-5-370H81v-60h554q21.25 0 35.63-14.32Q685-578.65 685-599.83 685-621 670.63-635.5 656.25-650 635-650q-14 0-26.5 7T590-623l-58-16q12-32 40-51.5t63-19.5q45.83 0 77.92 32.12 32.08 32.12 32.08 78Q745-554 712.92-522 680.83-490 635-490h-62q6 11 9 23.35 3 12.35 3 26.65 0 45.83-32.08 77.92Q520.83-330 475-330q-35 0-63-19.5T372-401l58-16q6 13 18.5 20t26.5 7q21.25 0 35.63-14.32Q525-418.65 525-439.82 525-461 510.63-475.5 496.25-490 475-490Zm5 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRelax;
