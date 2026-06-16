import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-support-agent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSupportAgent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M470-120q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T470-180h310v-304q0-58-25-111.5T688-690q-42-41-96-65.5T480-780q-58 0-112 24.5T272-690q-42 41-67 94.5T180-484v224q0 8.5-5.75 14.25T160-240q-33 0-56.5-23.5T80-320v-80q0-23 11-40.5t29-28.5l3-53q9-73 41.5-132t81-100q48.5-41 109-63.5T480-840q66 0 126.5 22.5t108.5 64q48 41.5 80.5 100T837-523l3 52q18 9 29 26.5t11 38.5v92q0 22-11 39t-29 26v69q0 24.75-17.62 42.38T780-120H470ZM360-410q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.63T390-440q0 12-8.62 21T360-410Zm240 0q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.63T630-440q0 12-8.62 21T600-410Zm-359-52q-4-59 16.5-107t55-81.5Q347-684 392-702t90-18q91 0 153 57.5T711-519q-94-1-165.5-50.5T435-698q-16 81-67.5 143.5T241-462Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSupportAgent;
