import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-bluetooth-drive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBluetoothDrive {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M248-314q23.33 0 39.67-15.75Q304-345.5 304-368q0-23.33-16.26-39.67Q271.47-424 248.24-424 225-424 209.5-407.73q-15.5 16.26-15.5 39.5Q194-345 209.75-329.5T248-314Zm391 0q23.33 0 39.67-15.75Q695-345.5 695-368q0-23.33-16.26-39.67Q662.47-424 639.24-424 616-424 600.5-407.73q-15.5 16.26-15.5 39.5Q585-345 600.75-329.5T639-314ZM123.77-120Q107-120 95.5-131.67 84-143.33 84-160v-320l82.13-240q5.87-18 21.44-29t34.66-11H604v60H222l-55 166h437v60H144v210h600v-210h60v314q0 16.67-11.73 28.33Q780.53-120 763.77-120 747-120 735.5-131.67 724-143.33 724-160v-44H164v44q0 16.67-11.73 28.33Q140.53-120 123.77-120ZM769-545q-6-2-10-7.79-4-5.78-4-12.21v-119l-87 87q-5 5-10 4.5t-10-5.5q-5-5-5-10.5t5-10.5l101-101-102-102q-5-5-4.5-10.5T648-843q5-5 10.5-5t10.5 5l86 87v-120q0-5.71 4-10.86Q763-892 769-894t12.5-0.5Q788-893 793-888l73.22 72.93Q871-810.41 871-804.21T866-793l-75 73 75 75q5 4.64 5 10.82 0 6.18-4.78 10.96L793-550q-5 5-11.33 6-6.33 1-12.67-1Zm21-223 38-36-38-38v74Zm0 172 38-38-38-38v76ZM144-474v210-210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBluetoothDrive;
