import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-add-home-work",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAddHomeWork {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M198-260v-201h226v201-201H198v201Zm443-365ZM40-200v-390l271-194 270 194v87q-18 14-33 31t-27 37v-124L311-710 100-558.58V-260h98v-201h226v201h66q2.6 15.84 7.8 30.92Q503-214 510-200H364v-201H258v201H40Zm880-720v451q-12.82-15.32-27.91-27.66Q877-509 860-520v-340H465v112l-60-42v-130h515ZM697-703h60v-60h-60v60Zm35.5 583Q655-120 600-175.5T545-307q0-78.43 54.99-133.72Q654.98-496 733-496q77 0 132.5 55.28Q921-385.43 921-307q0 76-55.5 131.5t-133 55.5ZM718-180h33v-110h110v-33H751v-110h-33v110H608v33h110v110Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAddHomeWork;
