import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-elixir-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevElixirIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M316.9 1.4c-44.1 15.7-85.3 61.1-126.6 135C129.2 248.9 51 408 159.1 534.6c49.7 58.3 133.6 92.4 241.6 38.4 86.8-44 112.3-170.7 79.6-229C415 221.8 349.6 192 332.5 116.6 321 65.4 315.5 27 316.9 1.4","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M316.9 0C272.8 15.6 230 61.1 190.3 135 129.2 247.5 51 406.7 159.1 533.2c49.7 58.3 132.2 76.8 177.7 42.7 29.8-22.8 49.7-44.1 61-89.6 12.9-51.2 3-118-4.2-150.7a482 482 0 0 1-8.5-130.8s-1.4 0-1.4-1.4c-24.2-28.4-41.3-54-49.8-89.6C321.1 64 315.4 25.6 317 0","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M279.9 20c-41.2 32.6-71 86.6-91 162-29.9 113.7-32.7 219-22.7 281.5C186 582.9 292.7 627 400.7 571.5c66.8-34.1 95.3-106.6 93.9-186.2-1.5-82.5-160.7-174.9-187.7-243.1-18.5-47-27-86.7-27-122.3","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M383.7 233.1c49.7 62.6 59.7 106.7 32.7 130.8-41.3 37-143.6 61.2-206.2 17.1-42.6-29.9-58.3-93.8-48.3-192a818 818 0 0 0-44 111 268 268 0 0 0-10 116.5c15.6 29.9 51.2 51.2 109.4 61.2 86.8 15.6 169.2 7 224.7-20 37-18.4 54-36.9 52.6-55.4 1.4-27-7.1-52.6-25.6-78.2-17-25.6-45.5-55.4-85.3-91","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M191.7 170.6c0 45.5 11.4 88.1 35.6 129.4 35.5 61 76.7 122.2 139.3 172 41.2 34.1 75.4 44 99.5 32.7-19.9 37-42.6 54-65.4 54-34-1.4-76.7-15.6-143.6-96.7-45.5-54-75.3-105.2-92.4-153.5 2.9-18.5 5.7-38.4 8.6-56.9 4.2-18.4 10-45.5 18.4-81","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M298.4 233.1c4.2 37 18.5 96.7 0 135.1C279.9 408 196 479.1 218.8 541.6c22.7 62.6 79.6 48.4 115.1 20 35.6-28.5 54-75.4 58.3-109.5 4.3-32.7-10-96.7-14.2-152.1-2.9-37-1.4-68.3 5.7-95.3l-11.4-14.2-64-18.5a101 101 0 0 0-10 61.1","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M321.1 49.8c-21.3 8.5-39.8 25.5-58.3 52.6-28.4 38.3-42.6 62.5-31.3 139.3 7.2 51.2 11.4 98 15.7 142.1l89.5-260.1a669 669 0 0 0-8.5-35.6 167 167 0 0 1-7-38.3","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-opacity":".3","fill-rule":"evenodd","d":"M335.3 122.3c-22.7 12.8-39.8 41.2-52.6 81-12.8 41.2-24.1 98-34 172 14.1-47 22.7-81 27-102.3 7-31.3 8.5-76.8 27-106.7a208 208 0 0 1 32.6-44","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M228.7 563c37 5.7 56.9 10 58.3 14.2 2.8 5.7-4.3 11.4-25.6 8.5a52 52 0 0 1-32.7-22.7","clip-rule":"evenodd"}],["path",{"fill":"currentColor","fill-opacity":".6","fill-rule":"evenodd","d":"M248.6 49.8a588 588 0 0 0-54 78.1c-15.6 27-25.6 48.4-32.7 61.2a370 370 0 0 0 2.8 110.9c2.9-47 11.4-93.9 27-138a378 378 0 0 1 57-112.2","clip-rule":"evenodd"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevElixirIcon;
