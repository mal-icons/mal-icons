import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-transportation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTransportation {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M770-319q-72 0-122.5-44.5T583-478H443q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T443-538h140q3-27 15-53.5t31-47.5H347q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T347-699h317l-55-161H470q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T470-920h139q20.09 0 35.55 11.5Q660-897 666-879l61 180h33q87 0 143.5 52T960-509q0 78-56 134t-134 56Zm0-60q52 0 91-39t39-91q0-56-37-93t-92.88-37q-1.12 0-9.620.5t-9.50.5l30 82q5 11-0.5 22T763-518q-11 4-22-1.5T725-536l-31-83q-27 23-40.5 49.5T640-509q0 54.17 37.92 92.08Q715.83-379 770-379ZM280-40q-45.42 0-77.21-31.79Q171-103.58 171-149v-11H30q-12.75 0-21.37-8.68Q0-177.35 0-190.17 0-203 8.63-211.5T30-220h167q13-15 34-26.5t49-11.5q25 0 45.5 10t37.5 28h127v-120H30q-12.75 0-21.37-8.68Q0-357.35 0-370.17 0-383 8.63-391.5T30-400h60v-120H30q-12.75 0-21.37-8.68Q0-537.35 0-550.17 0-563 8.63-571.5T30-580h235q8.17 0 15.23 3.95Q287.29-572.1 291-565l99 165h100q24.75 0 42.38 17.63T550-340v120q0 24.75-17.62 42.38T490-160H389v11q0 45.42-31.79 77.21Q325.42-40 280-40ZM150-400h170l-72-120h-98v120Zm130 300q20 0 34.5-14.5T329-149q0-20-14.5-34.5T280-198q-20 0-34.5 14.5T231-149q0 20 14.5 34.5T280-100Zm-35-180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTransportation;
