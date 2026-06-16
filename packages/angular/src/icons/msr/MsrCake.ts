import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-cake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCake {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-80q-17 0-28.5-11.5T120-120v-219q0-24.75 17.63-42.37T180-399h27v-182q0-24.75 17.63-42.37T267-641h183v-64q-20-14-30.5-30.53T409-775.41q0-14.59 5.5-28.09Q420-817 430-827l39-41q1-1 11.29-5Q482-873 491-868l39 41q10 10 16 23.5t6 28.09q0 23.34-11 39.88Q530-719 510-705v64h183q24.75 0 42.38 17.63T753-581v182h27q24.75 0 42.38 17.63T840-339v219q0 17-11.5 28.5T800-80H160Zm107-319h426v-182H267v182Zm-87 259h600v-199H180v199Zm87-259h426-426Zm-87 259h600-600Zm600-259H180h600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCake;
