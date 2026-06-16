import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-ramp-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRampRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M478-120q-13 0-21.5-8.5T448-150v-237q-31 42-77 82.5T267-231q-8 5-18 3t-16-8q-11-11-9.5-25t14.5-22q108-69 159-135.5T448-580v-146l-69 69q-9 9-21 9t-21-9q-9-9-9-21t9-21l120-120q5-5 10-7t11-2q6 0 11.5 2t10.5 7l119 120q9 9 9 21t-9 21q-9 9-21 9t-21-9l-69-69v576q0 13-8.5 21.5T478-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRampRight;
