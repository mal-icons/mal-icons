import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-smash-arrows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSmashArrows {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M121.07 15.52v339.31H20.54L121.07 497.35h77.39l-47.49-149.36h50.23V15.52h-80.12zm98.81 0v351.15h-43.36l41.55 130.68h80.36l41.55-130.68h-43.36V15.52h-76.73zm95.42 0v332.46h50.22l-47.49 149.36H391.3L491.82 354.83H391.3V15.52h-76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSmashArrows;
