import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-robot-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRobot2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-120v-220q0-24.75 17.63-42.37T220-400h520q24.75 0 42.38 17.63T800-340v220H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM220-180h520v-160H220v160Zm140-320h240q58.33 0 99.17-40.76 40.83-40.76 40.83-99Q740-698 699.17-739 658.33-780 600-780H360q-58.33 0-99.17 40.77-40.83 40.76-40.83 99Q220-582 260.83-541q40.83 41 99.17 41Zm0.18-110q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5Zm240 0q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5ZM480-180Zm0-460Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRobot2;
