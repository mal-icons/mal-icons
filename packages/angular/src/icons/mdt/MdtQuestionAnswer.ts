import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-question-answer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtQuestionAnswer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 11V4H4v8.17l0.59-0.580.58-0.59H6z","opacity":".3"}],["path",{"d":"M21 6h-2v9H6v2c0 0.550.45 1 1 1h11l4 4V7c0-0.55-0.45-1-1-1zm-5 7c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1v14l4-4h10zM4.59 11.59l-0.590.58V4h11v7H5.17l-0.580.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtQuestionAnswer;
