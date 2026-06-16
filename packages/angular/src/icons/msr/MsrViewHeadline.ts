import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-headline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewHeadline {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M189-372q-12 0-20.5-9t-8.5-21q0-13 8.5-21.5T190-432h581q12 0 20.5 9t8.5 21q0 13-8.5 21.5T770-372H189Zm0 160q-12 0-20.5-9t-8.5-21q0-13 8.5-21.5T190-272h581q12 0 20.5 9t8.5 21q0 13-8.5 21.5T770-212H189Zm0-316q-12 0-20.5-9t-8.5-21q0-13 8.5-21.5T190-588h581q12 0 20.5 9t8.5 21q0 13-8.5 21.5T770-528H189Zm0-160q-12 0-20.5-9t-8.5-21q0-13 8.5-21.5T190-748h581q12 0 20.5 9t8.5 21q0 13-8.5 21.5T770-688H189Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewHeadline;
