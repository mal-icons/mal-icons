import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-elderly-woman",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrElderlyWoman {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M559.83-40Q547-40 538.5-48.62T530-70v-130H428L326-64q-8 10-19.83 12T284-58q-10-8-12-19.83T278-100l75-100H243q6-86 28.5-176.5t54.5-165Q358-616 394.5-664t69.5-48q26 0 44 13t27 32l32 59q20 39 70.5 68.5T740-510q25 0 42.5 17.5T800-450v395q0 6-4.5 10.5T785-40q-6 0-10.5-4.5T770-55v-395q0-12-9-21t-21-9q-12 0-21 9t-9 21v15q0 6-4.5 10.5T695-420q-6 0-10.5-4.5T680-435v-22q-46-12-86.5-38T521-565l-37 115 101 224q2 6 3.5 11.68Q590-208.63 590-202v132q0 12.75-8.68 21.38Q572.65-40 559.83-40ZM527.08-756q-30.08 0-51.58-21.44T454-829q0-6 4-22-10-4-16-12.89T436-884q0-15.3 10.39-25.65Q456.79-920 472.15-920 483-920 492-914t13 16q5.5-2 11-3t11-1q30.11 0 51.56 21.42Q600-859.16 600-829.08q0 30.08-21.42 51.58-21.42 21.5-51.5 21.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrElderlyWoman;
