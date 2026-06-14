import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-udemy-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevUdemyIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-udemy-icon-1-a)"}],["path",{"fill":"currentColor","d":"M454.7 178.7 300 89.3l-154.7 89.4V89.3L300 0l154.7 89.3z"}],["path",{"fill":"currentColor","d":"M145.3 253.7h81v197a72 72 0 0 0 73.7 75.6c36 0 73.7-25.5 73.7-76.4V253.7h81v201.6q0 70.4-44.2 107.9-44 37-111.2 36.8-67.30.2-110.5-36.8c-28.8-24.8-43.5-59.7-43.5-105.9z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevUdemyIcon;
