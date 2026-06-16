import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wb-iridescent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWbIridescent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M216-376v-208h528v208H216Zm236-394v-110h60v110h-60Zm297 107-42-42 68-68 42 42-68 68ZM452-80v-110h60v110h-60Zm323-110-68-68 42-42 68 68-42 42ZM211-663l-68-68 42-42 68 68-42 42Zm-26 473-42-42 68-68 42 42-68 68Zm91-246h408v-88H276v88Zm0 0v-88 88Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWbIridescent;
