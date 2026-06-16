import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-water-do",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWaterDo {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M300.5-370q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T300-430q-12 0-21 8.63T270-400q0 12 9 21t21.5 9Zm60-120q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T360-550q-12 0-21 8.63T330-520q0 12 9 21t21.5 9Zm0 240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T360-310q-12 0-21 8.63T330-280q0 12 9 21t21.5 9Zm60-120q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T420-430q-12 0-21 8.63T390-400q0 12 9 21t21.5 9Zm0-240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T420-670q-12 0-21 8.63T390-640q0 12 9 21t21.5 9Zm60 120q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T480-550q-12 0-21 8.63T450-520q0 12 9 21t21.5 9Zm0 240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T480-310q-12 0-21 8.63T450-280q0 12 9 21t21.5 9Zm60-120q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T540-430q-12 0-21 8.63T510-400q0 12 9 21t21.5 9Zm0-240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T540-670q-12 0-21 8.63T510-640q0 12 9 21t21.5 9Zm60 120q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T600-550q-12 0-21 8.63T570-520q0 12 9 21t21.5 9Zm0 240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T600-310q-12 0-21 8.63T570-280q0 12 9 21t21.5 9Zm60-120q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T660-430q-12 0-21 8.63T630-400q0 12 9 21t21.5 9ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-60q112 0 186-76.5t74-191.82Q740-487 673.5-587.5T480-800Q353-688 286.5-587.5T220-408.32Q220-293 294-216.5T480-140Zm0-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWaterDo;
