import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-stopwatch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgStopwatch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.62 2.55L21.45 5.38L20.04 6.79L17.21 3.96L18.62 2.55Z","fill":"currentColor"}],["path",{"d":"M12.82 8.6H10.82V12.6H12.82V8.6Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.19 18.81C8.7 22.33 14.4 22.33 17.91 18.81C21.43 15.3 21.43 9.6 17.91 6.09C14.4 2.57 8.7 2.57 5.19 6.09C1.67 9.6 1.67 15.3 5.19 18.81ZM6.6 17.4C9.33 20.13 13.77 20.13 16.5 17.4C19.23 14.67 19.23 10.23 16.5 7.5C13.77 4.77 9.33 4.77 6.6 7.5C3.87 10.23 3.87 14.67 6.6 17.4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgStopwatch;
