import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-outpatient",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoOutpatient {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-120v-720h560v720H371v-170H270v170H40Zm60-60h110v-170h221v170h109v-600H100v600Zm110-270h60v-60h-60v60Zm0-160h60v-60h-60v60Zm160 160h60v-60h-60v60Zm0-160h60v-60h-60v60Zm424 256-42-42 53-54H640v-60h165l-53-54 42-42 126 126-126 126ZM210-180v-170h221v170-170H210v170Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoOutpatient;
