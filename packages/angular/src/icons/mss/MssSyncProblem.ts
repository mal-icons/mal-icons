import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-sync-problem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSyncProblem {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M132-160v-60h123l-14-14q-60-60-86.5-121.5T128-476q0-109 62.5-195T355-790v62q-76 30-121.5 99T188-476q0 52 17.5 98.5T265-293l30 27v-117h60v223H132Zm348-122q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm-28-148v-249h60v249h-60Zm153 261v-63q76-29 121.5-98T772-483q0-54-18-100.5T695-667l-30-27v117h-60v-223h223v60H704l15 14q62 57 87.5 120T832-483q0 108-63 194.5T605-169Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSyncProblem;
