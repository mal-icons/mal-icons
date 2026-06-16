import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-gavel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrGavel {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M189-120q-12 0-20.5-9t-8.5-21q0-13 8.5-21.5T190-180h421q12 0 20.5 9t8.5 21q0 13-8.5 21.5T610-120H189Zm151-254L202-512q-17-17-17.5-42t16.5-42l29-30 224 222-30 30q-17 17-42 17t-42-17Zm296-212L414-810l30-29q17-17 42-16.5t42 17.5l138 138q17 17 17 42t-17 42l-30 30Zm181 405L302-696l42-42 516 516q8 8 7.5 20.5T859-181q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrGavel;
