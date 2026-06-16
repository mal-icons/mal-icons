import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-chair",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoChair {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M193-120q-12 0-21-9t-9-21v-42h-13q-45.83 0-77.92-32.08Q40-256.17 40-302v-244q0-51 31-77.5t73-26.5v-86q0-46 29-75t75-29h465q46 0 74.5 29t28.5 75v86q42 0 73 26.5t31 77.5v244q0 45.83-32.08 77.92Q855.83-192 810-192h-13v42q0 12-9 21t-21 9q-12 0-21-9t-9-21v-42H223v42q0 12-9 21t-21 9Zm-43-132h660q20 0 35-15t15-35v-244q0-20-12-32t-32-12q-20 0-32 12t-12 32v176H188v-176q0-20-12-32t-32-12q-20 0-32 12t-12 32v244q0 20 15 35t35 15Zm98-178h464v-116q0-31 14-51.5t30-32.5v-106q0-20-12-32t-31.74-12H247.74Q228-780 216-768t-12 32v106q16 12 30 32.5t14 51.5v116Zm232 0Zm0 178Zm0-118Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoChair;
