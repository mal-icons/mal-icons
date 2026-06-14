import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-repo-forked-locked-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRepoForkedLocked24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M15 14.5V16h-0.25c-0.97 0-1.750.78-1.75 1.75v4.5c0 0.970.78 1.75 1.75 1.75h7.5c0.97 0 1.75-0.78 1.75-1.75v-4.5c0-0.97-0.78-1.75-1.75-1.75H22v-1.5c0-1.93-1.57-3.5-3.5-3.5S15 12.57 15 14.5zm3.5-2c-1.1 0-2 0.9-2 2v1.5h4v-1.5c0-1.1-0.89-2-2-2z"}],["path",{"fill-rule":"evenodd","d":"M11.75 22.5c0.41 0 0.75-0.340.75-0.75s-0.34-0.75-0.75-0.75c-0.97 0-1.75-0.78-1.75-1.75 0-1 0.78-1.75 1.75-1.750.5 0 0.75-0.50.75-1v-3.75h1.25c0.41 0 0.75-0.340.75-0.75s-0.34-0.75-0.75-0.75H8.75C7.51 11 6.5 9.99 6.5 8.75v-0.84c1.43-0.34 2.5-1.63 2.5-3.16 0-1.79-1.45-3.25-3.25-3.25S2.5 2.96 2.5 4.75c0 1.54 1.07 2.82 2.5 3.16v0.84C5 10.82 6.68 12.5 8.75 12.5h2.5v3.59c-1.430.34-2.5 1.63-2.5 3.16 0 1.8 1.21 3.25 3.25 3.25zm-6-16c-0.97 0-1.75-0.78-1.75-1.75S4.78 3 5.75 3s1.750.78 1.75 1.75S6.72 6.5 5.75 6.5z"}],["path",{"fill-rule":"evenodd","d":"M18.25 10.25c0.41 0 0.75-0.340.75-0.75V7.59c1.43-0.34 2.5-1.63 2.5-3.16 0-1.79-1.45-3.25-3.25-3.25S15 2.96 15 4.75c0 1.54 1.07 2.82 2.5 3.16V9.5c0 0.410.340.750.750.75zm0-3.75c-0.97 0-1.75-0.78-1.75-1.75S17.28 3 18.25 3s1.750.78 1.75 1.75S19.22 6.5 18.25 6.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRepoForkedLocked24;
