import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewCompact {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-170v-620h800v620H80Zm60-433h125v-127H140v127Zm185 0h125v-127H325v127Zm185 0h125v-127H510v127Zm185 0h125v-127H695v127Zm0 187h125v-127H695v127Zm-185 0h125v-127H510v127Zm-185 0h125v-127H325v127Zm-60-127H140v127h125v-127Zm430 313h125v-126H695v126Zm-185 0h125v-126H510v126Zm-185 0h125v-126H325v126Zm-185 0h125v-126H140v126Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewCompact;
